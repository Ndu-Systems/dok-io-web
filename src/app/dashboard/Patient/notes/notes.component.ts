import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  showAddNotes: boolean = true;
  constructor() {}

  ngOnInit() {}
  closeModal(e: boolean) {
    this.showAddNotes = e;
  }
  showModal(){
    this.showAddNotes= true;
  }
}
