import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  panelOpenState: boolean = false;
  skillSetData: any[] = [
    {
      title: 'Programming languages',
      values: [
        'Typescript/Sajascript',
        ' Python',
        ' SQL/PLSQL/MQL',
        ' R Language',
        ' C++',
      ],
    },
    {
      title: 'Enterprise/Web Technologies',
      values: [
        'Angular',
        ' Ionic',
        ' React',
        ' Django',
        ' HTML5',
        ' ES6',
        ' JSON',
        ' NG Material/Bootstrap',
        ' NPM & NVM',
        ' Karma/Jasmine',
        ' Google OAuth, JWT',
        ' Request, Async',
        ' Browserify, Chrome Dev Tools',
        ' AWS: EC2, Elastic beanstalk, Cloud9, Balance loader, Elastic IP, SSH',
      ],
    },
    { title: 'Operating Systems', values: ['Ubuntu', 'Windows', 'MacOSX'] },
    {
      title: 'Database Technologies',
      values: [
        'Mongo/Atlas',
        ' Oracle 12',
        ' MySQL/MSSQL Server',
        ' AWS Athena/RDS',
        ' Visual Studio SSIS/Warehousing',
      ],
    },
    {
      title: 'Testing & Debugging',
      values: [
        'Karma/Jasmine',
        ' Postman/Insomnia',
        ' Chrome performance reports',
        ' Chrome SDK Console',
      ],
    },
    {
      title: 'Development Environments',
      values: [
        'VS Code',
        ' Android Studio',
        ' XCode',
        ' Atom',
        ' Sublime Text',
        ' RStudio',
        ' MS VS',
        ' Cloud9',
      ],
    },
    { title: 'Version Control', values: ['GIT', 'JIRA', 'Github'] },
  ];
  constructor() {}

  ngOnInit(): void {}

}
