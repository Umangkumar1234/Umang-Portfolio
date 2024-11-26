import { Component } from '@angular/core';
import { Education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'Marwadi Education Foundation’s Group of Institutions (MEFGI) Rajkot',
      course: 'B.E. Computer Engineering',
      duration: '2019-2023',
      score: 'CGPA:8.40'
    },
    {
      institute: '+2 Janta High School Parsuani, Sitamarhi',
      course: 'Higher Secondary School (HSC)',
      duration: '2016-2018',
      score: '61.8%'

    },
    {
      institute: 'Janta High School Parsuani, Sitamarhi',
      course: 'Secondary School (SSC)',
      duration: '2015-2016',
      score: '75.4%'
    }

  ]
  
}
