import { Component,ViewEncapsulation, ViewChild } from '@angular/core'

@Component({
	selector: 'student-table',
	templateUrl: './student-table.component.html',
    styleUrls: ['./work-table.component.css']
})


export class StudentTableComponent {

    @ViewChild('myTable') table: any;


    fold = true;


    rows = `alice1,Alice,Harrington,1001232131,alice.harrington@mail.utoronto.ca
        bob1,Bob,Cheng,100235656,bob.cheng@mail.utoronto.ca
        carol1,Carol Estrada,100564651,carol.estrada@mail.utoronto.ca
        david1,David Tafliovich,10006565456,david.tafliovich@mail.utoronto.ca
        eve,Eve Brestcher,1000654654,eve.brestcher@mail.utoronto.ca
        frank1,Frank Pancer,1000654654,frank.pancer@mail.utoronto.ca
        grace1,Grace Sans,10000897,grace.sans@mail.utoronto.ca
        heidi1,Heidi Shroeder,100065203984,heidi.shroeder@mail.utoronto.ca`.split('\n')
        .map(e=>e.split(','))
        .map(function(row) {
            return {
            utorid: row[0],
            name: row[1] + " " + row[2],
            student_number: row[3],
            email: row[4]
        }
    });

    expanded: any = {};
    timeout: any;



    constructor() {
    }

    onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
    }

    toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
    console.log('Detail Toggled', event);
    }

}