import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddPost.scss';
import Heading from '../../components/Heading/Heading';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { blogAPI } from '../../api';
import { fillObject } from '../../utils';

class AddPost extends Component {
   state = {
      postData: {
         title: '',
         img: '',
         categories: [],
         text: ''
      },
      categories: [],
      errs: {},
      isEditing: false
   };

   componentDidMount() {
      const postId = this.props.match.params.id;

      blogAPI.getCategories().then(categories => {
         this.setState({ categories });
      });

      if (postId) {
         blogAPI.getPost(postId).then(postData => {
            this.setState({
               postData: fillObject(this.state.postData, postData),
               isEditing: true
            });
         });
      }
   }

   onChange = formData => {
      this.setState({ postData: formData });
   };

   renderFormFields = () => {
      const formFields = [
         {
            type: 'select',
            label: 'Categories',
            name: 'addpost_categories',
            dataName: 'categories',
            options: this.state.categories
         },
         {
            type: 'text',
            label: 'Title',
            name: 'addpost_title',
            icon: 'ion-ios-pricetags',
            dataName: 'title',
            required: true
         },
         {
            type: 'text',
            label: 'Image URL',
            name: 'addpost_imageurl',
            icon: 'ion-ios-pricetags',
            dataName: 'img',
            required: true
         },
         {
            type: 'textarea',
            label: 'Text',
            name: 'addpost_text',
            dataName: 'text',
            required: true
         }
      ];
      const { postData, errs } = this.state;

      return formFields.map(field => {
         let sharedProps = {
            name: field.name,
            id: field.name,
            dataName: field.dataName,
            placeholder: field.label,
            required: field.required,
            value: postData[field.dataName],
            error: errs[field.dataName]
         };

         let formElement;

         switch (field.type) {
            case 'text':
               formElement = (
                  <Form.Input {...sharedProps} icon={field.icon} type="text" />
               );
               break;
            case 'select':
               formElement = (
                  <Form.Select
                     {...sharedProps}
                     options={field.options}
                     isMulti
                  />
               );
               break;
            case 'textarea':
               formElement = <Form.Textarea {...sharedProps} />;
               break;
         }

         return (
            <Form.Field key={field.name}>
               <Form.Label label={field.label} htmlFor={field.name} />
               {formElement}
            </Form.Field>
         );
      });
   };

   onSubmit = (errs = {}) => {
      const { postData, isEditing } = this.state;
      const postId = this.props.match.params.id;

      if (postData.categories.length < 1) {
         errs.categories = "Can't be blank";
      }

      if (Object.keys(errs).length === 0) {
         if (!isEditing) {
            // create a post
            blogAPI
               .createPost(postData)
               .then(() => this.props.history.push('/blog'));
         } else {
            // update the post
            blogAPI
               .updatePost(postId, postData)
               .then(() => this.props.history.push(`/blog/${postId}/`));
         }
      } else {
         this.setState({ errs });
      }
   };

   render() {
      const { isEditing } = this.state;
      return (
         <React.Fragment>
            <Heading text="Add Post" />
            <Form
               onSubmit={this.onSubmit}
               onChange={this.onChange}
               initState={this.state.postData}
               className="card form-card"
            >
               {this.renderFormFields()}
               <Button color="green">{isEditing ? "Update" : "Add"}</Button>
            </Form>
         </React.Fragment>
      );
   }
}

AddPost.defaultProps = {
   match: {
      params: { id: undefined }
   }
};

AddPost.propTypes = {
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   }).isRequired,
   match: PropTypes.shape({
      params: PropTypes.shape({
         id: PropTypes.string
      })
   })
};

export default AddPost;
