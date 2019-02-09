import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.scss"]
})
export class PatientComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(r => {
     let patientId = r["id"];
     this.getPatientDetails(patientId)
    });
  }

  ngOnInit() {}
  getPatientDetails(patientId:string){

  }
}
