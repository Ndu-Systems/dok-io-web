export interface CloseModalEventEmmiter{
    openAddPatient:boolean;
    openAddMedicalAid:boolean;
    openAddEmengencyContact:boolean;
    closeAll:boolean;    
}

export interface ExitModalEventEmmiter{
    close: boolean;
};
