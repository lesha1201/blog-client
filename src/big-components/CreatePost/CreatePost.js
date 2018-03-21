import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreatePost.scss';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { blogAPI } from '../../api';

class CreatePost extends Component {
   state = {
      data: {
         title: '',
         img: '',
         text: '',
         tags: []
      },
      tag: '',
      editMode: !!this.props.match.params.id
   };

   componentDidMount() {
      const { id } = this.props.match.params;
      if (id) blogAPI.getPost(id).then(post => this.setState({ data: post }));
   }

   onChangeData = e =>
      this.setState({
         data: { ...this.state.data, [e.target.name]: e.target.value }
      });

   onChange = e =>
      this.setState({
         [e.target.name]: e.target.value
      });

   addTag = e => {
      const { data } = this.state;
      let tag = this.state.tag.trim();

      if (e.key === ' ' && tag.length > 1) {
         data.tags.indexOf(tag) === -1
            ? this.setState({
                 data: { ...data, tags: [...data.tags, tag] },
                 tag: ''
              })
            : this.setState({ tag: '' });
      }
   };

   onSubmit = e => {
      e.preventDefault();
      const { data, editMode } = this.state;
      const { id } = this.props.match.params;
      const post = {
         title: data.title,
         img: data.img,
         text: data.text,
         tags: data.tags
      };

      editMode
         ? blogAPI
              .updatePost(id, post)
              .then(() => this.props.history.push('/blog'))
         : blogAPI
              .createPost(post)
              .then(() => this.props.history.push('/blog'));
   };

   renderTags = () => {
      const { tags } = this.state.data;
      return (
         <ul className="tags-list">
            {tags.map(tag => (
               <li key={tag} className="tags-list__tag">
                  {tag}
                  <span
                     className="tags_list__tag__close"
                     onClick={() => this.deleteTag(tag)}
                  >
                     X
                  </span>
               </li>
            ))}
         </ul>
      );
   };

   deleteTag = tag => {
      this.setState(prevState => {
         let tags = prevState.data.tags.filter(stateTag => stateTag !== tag);
         return { data: { ...this.state.data, tags } };
      });
   };

   deletePost = e => {
      e.preventDefault();
      const { id } = this.props.match.params;
      blogAPI.deletePost(id).then(() => this.props.history.push('/blog'));
   };

   render() {
      const { data, editMode } = this.state;
      return (
         <React.Fragment>
            <SectionHeading text="Create" />
            <div className="create-post">
               <Form onSubmit={this.onSubmit}>
                  <Form.Field>
                     <label htmlFor="title">Title</label>
                     <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Your title"
                        value={data.title}
                        onChange={this.onChangeData}
                     />
                  </Form.Field>
                  <Form.Field>
                     <label htmlFor="img">Image URL</label>
                     <input
                        type="text"
                        name="img"
                        id="img"
                        placeholder="URL for image"
                        value={data.img}
                        onChange={this.onChangeData}
                     />
                  </Form.Field>
                  <Form.Field>
                     <label htmlFor="text">Text</label>
                     <textarea
                        id="text"
                        name="text"
                        placeholder="Text"
                        value={data.text}
                        onChange={this.onChangeData}
                     />
                  </Form.Field>
                  <Form.Field>
                     <label htmlFor="tag">Tags</label>
                     {this.renderTags()}
                     <input
                        type="text"
                        id="tag"
                        name="tag"
                        placeholder="#tag1 #tag2"
                        value={this.state.tag}
                        onChange={this.onChange}
                        onKeyPress={this.addTag}
                     />
                  </Form.Field>
                  <Button color="green" text={editMode ? 'Update' : 'Add'} />
                  {editMode && (
                     <Button
                        onClick={this.deletePost}
                        color="red"
                        text="Delete"
                     />
                  )}
               </Form>
            </div>
         </React.Fragment>
      );
   }
}

CreatePost.propTypes = {
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   }),
   match: PropTypes.shape({
      params: PropTypes.shape({
         id: PropTypes.string
      })
   })
};

export default CreatePost;
