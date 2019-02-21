import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  showPopup= false;
  constructor() { }

  ngOnInit() {}
  showAddPatientModal() {
    this.showPopup = true;
  }
  closeModal(e){
      this.showPopup = false;
  }
}
