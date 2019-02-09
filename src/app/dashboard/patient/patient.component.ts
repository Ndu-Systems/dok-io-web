import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.scss"]
})
export class PatientComponent implements OnInit {
  PatientId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(r => {
      this.PatientId = r["id"];
      alert(this.PatientId)
    });
  }

  ngOnInit() {}
}
