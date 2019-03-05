import {
  AddPrescriptionModel,
  Drug
} from "./../../../models/addprescription.model";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { getCurrentUser } from "src/app/shared";
import { PrescriptionService } from "src/app/services";

@Component({
  selector: "app-add-prescription",
  templateUrl: "./add-prescription.component.html",
  styleUrls: ["./add-prescription.component.scss"]
})
export class AddPrescriptionComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<boolean> = new EventEmitter();
  @Input() patientId;
  UserId: string = getCurrentUser();

  results: any[];
  drugsList: any[];

  rForm: FormGroup;
  data: AddPrescriptionModel;
  constructor(
    private fb: FormBuilder,
    private prescriptionService: PrescriptionService
  ) {
    this.prescriptionService.getMedications().subscribe(r => {
      this.drugsList = r;
    });
  }
  ngOnInit() {
    this.rForm = this.fb.group({
      patientId: this.patientId,
      symptoms: "",
      diagnosis: "",
      boolPreasure: "",
      pulseRate: "",
      CreateUserId: this.UserId,
      ModifyUserId: this.UserId,
      StatusId: 1,
      drugs: this.fb.array([])
    });
    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  closeModal() {
    this.closeModalAction.emit(true);
  }

  get formDrugs() {
    return this.rForm.get("drugs") as FormArray;
  }
  addDrug() {
    const drug = this.fb.group({
      medicationId: "", // this will be name, then change it ti Id on send
      unit: "",
      dosage: ""
    });

    this.formDrugs.push(drug);
  }
  deleteDrug(i) {
    this.formDrugs.removeAt(i);
  }
  proccessdata(data: AddPrescriptionModel) {

    let drugs: Array<Drug> = [];

    if (data.drugs.length > 0) {
      data.drugs.forEach(element => {

        let drugId = this.drugsList.filter(
          x => x.name.toLowerCase() == element.medicationId.toLocaleLowerCase() ||  x.medicationId.toLowerCase() == element.medicationId.toLocaleLowerCase()
        );

        if (drugId.length > 0) {
          element.medicationId = drugId[0].medicationId;
          drugs.push(element);
        } else {
          let newDrug = {
            name:element.medicationId,
            description: element.medicationId,
            CreateUserId: this.UserId,
            StatusId: 1
          };
         
            this.prescriptionService.addMedication(newDrug).subscribe(res => {
              element.medicationId = res;
              drugs.push(element);
            });
         
        }
      });
    }
    console.log(drugs);

    // create prescription
    data.drugs = drugs;
    this.prescriptionService.addPrescription(data).subscribe(r=>{
      alert(r);
    })
  }
  search(event) {
    this.results = this.drugsList.map(x => x.name);
    this.results = this.results.filter(x =>
      x.toLowerCase().includes(event.query.toLowerCase())
    );
  }
}
