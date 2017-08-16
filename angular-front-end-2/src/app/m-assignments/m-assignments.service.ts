import { Injectable } from '@angular/core';

import { APIRoutingService } from '../services/api-routing.service';

@Injectable()
export class MAssignmentsService {
  constructor(private _api: APIRoutingService) { }

  createFeedbackQuestion(params) {
    return this._api.put('works/feedback_questions', params);
  }

  getAllFeedbackQuestions(params) {
    return this._api.get('works/feedback_questions/all', params);
  }

  addAssignment(params) {
    return this._api.put('works', params);
  }

  getAllAssignments(params) {
    return this._api.get('works/all', params);
  }

  updateAssignment(params) {
    return this._api.post('works', params);
  }

  getAssignment(params) {
    return this._api.get('works', params);
  }

  loadSubmissions(params) {
    return this._api.post('works/submissions/loadSubmissions', params);
  }

  loadSubmissionFiles(params) {
    return this._api.post('works/submissions/loadSubmissionFiles', params);
  }

  distribute(params) {
    return this._api.post('works/submissions/distribute', params);
  }
}