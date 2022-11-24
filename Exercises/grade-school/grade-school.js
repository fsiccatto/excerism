
export class GradeSchool {
  constructor() {
    this.classRoster = {};
  }

  roster() {
    let returnRoster={}
    for (let grade in this.classRoster) {
      let rrGrade=  this.classRoster[grade];
      returnRoster[grade] = rrGrade.sort();
    }
    return JSON.parse(JSON.stringify(returnRoster));
  }

  add(student, grade) {
    for (let gradeNum in this.classRoster) {
      gradeNum;
      if(this.classRoster[gradeNum].includes(student)){
        this.classRoster = this.classRoster[gradeNum].filter((element) => element != student );
      };
    }
    
    if (this.classRoster[grade]) {
      this.classRoster[grade].push(student); // add student to existing grade
    } else {
      this.classRoster[grade] = [student]; // create new grade with student
    }
    console.log(this.classRoster);
  }

  grade(grade) {
    if (this.classRoster[grade]) {
      return JSON.parse(JSON.stringify(this.classRoster[grade].sort()));
    } else {
      return [];
    }
  }
}

let school = new GradeSchool();
school.add('Aimee', 2);
school.add('Aimee', 1);
school.add('Blair', 2);
school.add('James', 2);
school.add('Paul', 2);
school.add('Chelsea', 3);
school.grade(1);
school.grade(2);
school.roster();