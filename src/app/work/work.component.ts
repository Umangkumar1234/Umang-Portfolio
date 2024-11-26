import { Component } from '@angular/core';
import { WorkExperience, WorkExperienceAssociate } from '../education/education';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  workList: WorkExperience[]=[{
    role:'Associate Software Developer',
    company: 'Amnex Infotechnologies Pvt ltd.',
    duration: 'Jul 2023 - Present',
    description:[
      'Utilized Git, Gitlab and TFS for version control and project management.',
      'Contributed to troubleshooting and fixing issues in 10+ live projects.',
      'Acquired the skill of deploying Dot Net applications on an IIS Server.',
      'Learned strategies for improving database query optimization.',
      'Implemented logic to upload datasets to Azure Blob Storage using SAS tokens within a .NET MVC framework.'
    ]
  }]

  WorkExperienceAss: WorkExperienceAssociate[]=[{
    role:'Software Developer Intern',
    company: 'Amnex Infotechnologies Pvt ltd.',
    duration: 'Jan 2023 - Jun 2023',
    description:[
      'Designed CRUD operations within a .NET MVC framework.',
      'Implemented authorized API endpoints using JWT tokens in .NET Core Web API.',
      'Acquired basic understanding of Angular framework.',
      'Learned and utilized Kendo UI for .NET and Angular.',
      'Resolved over 100 SQL queries with optimization.',
      'Worked with ADO.NET for database connectivity and data operations with PostgreSQL and SQL Server.'
    ]
  }]
}
