/**
 * Code based on MERN stack tutorial provided by MongoDB's website
 * https://www.mongodb.com/languages/mern-stack-tutorial
 * Accessed: 11/11/21
 */
import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
 
export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangeReviewTitle = this.onChangeReviewTitle.bind(this);
    this.onChangeOriginalLanguageTitle = this.onChangeOriginalLanguageTitle.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeReviewStage = this.onChangeReviewStage.bind(this);
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);
    this.onChangeCompletionDate = this.onChangeCompletionDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      review_title: "",//
      original_language_title: "",//
      start_date: "",//
      completion_date: "", //
      review_stage: "",//
      contact_name: "",//
      contact_email: "",
      contact_address: "",
      contact_phone_num: "",
      organization_affiliation: "",
      review_team_members: "",
      funding_sponsors: "",
      conflicts_of_interest: "",
      collaborators: "",
      review_questions: "",
      sources: "",
      search_strategy_url: "",
      participation_criteria: "",
      study_criteria: "",
      primary_outcome: "",
      secondary_outcome: "",
      data_extraction: "",
      bias_assessment: "",
      data_synthesis: "",
      sub_group_analysis: "",
      review_type: "",
      languages: "",
      country: "",
      published_protocol: "",
      other_registration_details: "",
      dissemination_plans: "",
      keywords: "",
      existing_review_details: "",
      current_status: "",
      additional_info: "",
      final_publication_details: "",
    };
  }
 
  // These methods will update the state properties.
  onChangeReviewTitle(e) {
    this.setState({
      review_title: e.target.value,
    });
  }
 
  onChangeOriginalLanguageTitle(e) {
    this.setState({
      original_language_title: e.target.value,
    });
  }
 
  onChangeStartDate(e) {
    this.setState({
      start_date: e.target.value,
    });
  }

  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeReviewStage(e) {
    this.setState({
      review_stage: e.target.value,
    });
  }
  
  onChangeContactName(e) {
    this.setState({
      contact_name: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
  onChangeCompletionDate(e) {
    this.setState({
      completion_date: e.target.value,
    });
  }
  
 
// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      person_name: this.state.person_name,
      person_position: this.state.person_position,
      person_level: this.state.person_level,
    };
 
    axios
      .post("http://localhost:5000/record/add", newperson)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      person_name: "",
      person_position: "",
      person_level: "",
    });
  }
 
  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Submit New Review</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Review Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.review_title}
              onChange={this.onChangeReviewTitle}
            />
          </div>
          <div className="form-group">
            <label>Original Language Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.original_language_title}
              onChange={this.onChangeOriginalLanguageTitle}
            />
          </div>
          <div className="form-group">
            <label>Start Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.start_date}
              onChange={this.onChangeStartDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.completion_date}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Review Stage: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.review_stage}
              onChange={this.onChangeReviewStage}
            />
          </div>
          <div className="form-group">
            <label>Contact Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact_name}
              onChange={this.onChangeContactName}
            />
          </div>
          <div className="form-group">
            <label>Contact Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact_email}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Contact Address: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact_address}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Contact Phone Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact_phone_num}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>List all Affiliated Organizations: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.organization_affiliation}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>List Additional Team Members: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.review_team_members}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>List all Sponsors/Funding Sources: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.funding_sponsors}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Explain any Conflicts of Interest: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.conflicts_of_interest}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>List any Additional Collaborators: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.collaborators}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>What is the Primary Question the Review is Answering: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.review_questions}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sources}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.search_strategy_url}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.participation_criteria}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.study_criteria}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.primary_outcome}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.secondary_outcome}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.data_extraction}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.bias_assessment}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.data_synthesis}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sub_group_analysis}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.review_type}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.languages}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.country}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.published_protocol}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.other_registration_details}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.dissemination_plans}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.keywords}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.existing_review_details}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.current_status}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.additional_info}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <label>Completion Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.final_publication_details}
              onChange={this.onChangeCompletionDate}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit Review"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}