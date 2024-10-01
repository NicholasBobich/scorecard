import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addCourse(course: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/scorecard-api/add/course`, course);
  }

  getCourses(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/scorecard-api/courses`);
  }
}
