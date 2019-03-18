import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; //l-f
import { PatientService } from "src/app/services";
import { getCurrentUser } from "src/app/shared";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.scss"]
})
export class AddNoteComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<boolean> = new EventEmitter();
  @Input() PatientId;
  @Input() Name;
  rForm: FormGroup;

  Notes: string;
  prescriptionGiven: string;
  UserId: string = getCurrentUser();

  constructor(private fb: FormBuilder, private patientService: PatientService) {

  }

  ngOnInit() {
    this.rForm = this.fb.group({
      Name: [this.Name, Validators.required],
      Notes: [null, Validators.required],
      prescriptionGiven: [false, Validators.required],
      CreateUserId: [this.UserId],
      PatientId: [this.PatientId],
      StatusId: [1]
    });

    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  closeModal() {
    this.closeModalAction.emit(false);
  }
  addNotes(data) {
    this.patientService.addPatientNotes(data).subscribe(response => {
      alert(response)
      if (response) {
        this.closeModalAction.emit(false);
      } else {
        alert(`Error: ${response}`);
      }
    });
  }
}
