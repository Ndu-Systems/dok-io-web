import { QueeService } from './../services/quee.service';
import { Component, OnInit } from "@angular/core";
import { CloseModalEventEmmiter } from "../models/modal.eventemitter.model";
import { Observable } from 'rxjs';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  showPopup:boolean;
  openAddPatient:boolean;
  openAddMedicalAid:boolean;
  openAddEmengencyContact:boolean;
  quees$:Observable<Array<any>>;
  constructor(private queeService:QueeService) { 
    this.quees$ = this.queeService.getQuees();
    // setInterval(data=>{
    //   this.quees$ = this.queeService.getQuees();
    // }, 3000)
  }

  ngOnInit() {}
  showAddPatientModal() {
    this.showPopup = true;
    this.openAddPatient = true;
  }
  closeModal(e:CloseModalEventEmmiter){
    console.log(e);

    if(e.closeAll){
      this.showPopup = false;
    }
    else if(e.openAddMedicalAid){
      this.openAddPatient = false;
      this.openAddMedicalAid = true;
    }
    else if(e.openAddEmengencyContact){
      this.openAddPatient = false;
      this.openAddMedicalAid = false;
      this.openAddEmengencyContact = true;
    }
  }
  nextQuee(){
    this.quees$.subscribe(data=>{
      let queeList:Array<any> = data;
      if(queeList.length){
        let ids = queeList.map(x=>Number(x.QuiID));
        let nextId =Math.min(...ids);

        //beep
        // let beep = document.getElementById("myAudio"); 
        // beep.play(); 

          let audio = new Audio();
          audio.src = "../../assets/sounds/beep.wav";
          audio.load();
          audio.play();
          setTimeout(function(){
               // say it 
        var base = `Now calling patient number, ${nextId}`;
        var msg = new SpeechSynthesisUtterance(base);
        window.speechSynthesis.speak(msg);

          }, 1000);
       

     
       console.log(nextId)
       // update db
       console.log(nextId)
       this.queeService.updateQuee({QuiID:nextId}).subscribe(r=>{
        //  alert(r);
        this.quees$ = this.queeService.getQuees();

       })
      }
    })
  }
}
