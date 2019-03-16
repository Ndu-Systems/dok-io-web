import { PatientService } from 'src/app/services';
import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  @Input() PatientId;
  showAddNotes: boolean;
  notes$:Observable<Array<any>>;
  constructor(private patientService:PatientService) {}

  ngOnInit() {
    this.notes$  =  this.patientService.getPatientNotes(this.PatientId);
  }
  closeModal(e: boolean) {
    this.notes$  =  this.patientService.getPatientNotes(this.PatientId);
    this.showAddNotes = e;
  }
  showModal(){
    this.showAddNotes= true;
  }
}
