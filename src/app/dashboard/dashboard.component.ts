import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
<<<<<<< HEAD
  showAddPatient = false;
  constructor() {}
=======
  showAddPatient= false;
  constructor() { }
>>>>>>> c9327e64819d8b8837109b0da5bd2e5cfea88057

  ngOnInit() {}
  showAddPatientModal() {
    this.showAddPatient = true;
  }
<<<<<<< HEAD
  closeModal(e) {
    this.showAddPatient = false;
=======
  closeModal(e){
      this.showAddPatient = false;
>>>>>>> c9327e64819d8b8837109b0da5bd2e5cfea88057
  }
}
