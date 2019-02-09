import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadCrumb } from "../bread-crumb/bread-crumb.model";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.scss"]
})
export class PatientComponent implements OnInit {
  items:Array<BreadCrumb> = [
    {
      name:'FREEDOM', url:'/dashboard', active:true
    },
    {
      name:'INCOMPLETE PATIENTS', url:'/dashboard', active:false
    }, {
      name:' ARCHIVED PATIENTS', url:'/dashboard', active:false
    }

  ];
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
