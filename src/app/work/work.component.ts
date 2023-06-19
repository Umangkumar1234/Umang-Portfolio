import { Component } from '@angular/core';
import { WorkExperience } from '../education/education';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  workList: WorkExperience[]=[{
    role:'Software Developer Intern',
    company: 'Amnex Infotechnologies Pvt ltd.',
    duration: 'Jan 2023 - Present',
    description:[
      'I have learned spring boot modules, postgreSQL and angular.',
      'Worked on PostgreSQL and how to use with stored procedures and functions.',
      'Worked on angular and connect with spring boot using API.',
      'Database Connectivity using JPA repository and JDBC template with spring boot'
    ]
  }]
}
