import React, { Component } from 'react';
import './CreatePost.scss';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { blogAPI } from '../../api';

class CreatePost extends Component {
   state = {
      data: {
         title: '',
         imgUrl: '',
         content: '',
         tags: []
      },
      tag: ''
   };

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
      const { data } = this.state;
      const post = {
         title: data.title,
         img: data.imgUrl,
         text: data.content,
         tags: data.tags
      };
      console.log(post);
      blogAPI.createPost(post).then(res => console.log(res));
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

   render() {
      return (
         <div className="create-post">
            <SectionHeading text="Create" />
            <Form onSubmit={this.onSubmit}>
               <Form.Field>
                  <label htmlFor="title">Title</label>
                  <input
                     type="text"
                     id="title"
                     name="title"
                     placeholder="Your title"
                     value={this.state.title}
                     onChange={this.onChangeData}
                  />
               </Form.Field>
               <Form.Field>
                  <label htmlFor="imgUrl">Image URL</label>
                  <input
                     type="text"
                     name="imgUrl"
                     id="imgUrl"
                     placeholder="URL for image"
                     value={this.state.imgUrl}
                     onChange={this.onChangeData}
                  />
               </Form.Field>
               <Form.Field>
                  <label htmlFor="content">Text</label>
                  <textarea
                     id="content"
                     name="content"
                     placeholder="Content"
                     value={this.state.content}
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
                     onKeyUp={this.addTag}
                  />
               </Form.Field>
               <Button color="green" text="Add" />
            </Form>
         </div>
      );
   }
}

export default CreatePost;
