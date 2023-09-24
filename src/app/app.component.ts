import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { AdresseipService } from './adresseip.service';
import { AdresseIP } from './AdresseIP';
import { Attack } from './Attack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  public apiBandePassanteOK = true; 
  public apiadressesIPOK = true;
  title = 'switch';
  size: NzButtonSize = 'large';
  public onglet = 1; 

  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];
  public newDebit: number = 0;
  public currentIP: string = ""; 
  listOfDataIP: AdresseIP[] = [];
  listOfAttacks: Attack[] = [];


  constructor(private adresseipService: AdresseipService) { }


  ngOnInit(): void {

    this.adresseipService.getAllAdressesIp()      
      .subscribe(data => {
        console.log("data", data);
      this.listOfDataIP = data;
    });

    this.adresseipService.getAllAttack()      
    .subscribe(data => {
    this.listOfAttacks = data;
  });

  }

  updateStatus(ip: string, status: string) {
    console.log("component");
    
    const request: any = {
      valueIPV4: ip,
      status: status,
    };
    this.adresseipService.updateStatus(request)      
    .subscribe(data => {
    console.log("Update OK");    
    });
  }

  // changeCurrentIP(ip: string) {
  //   this.currentIP = ip; 
  // }

  // changerDebit(ip: string) {
  //   const index = this.listOfData.findIndex(item => item.ip === this.currentIP);
  //   let item = this.listOfData[index]; 
  //   item.debit = this.newDebit; 
  //   // Appeler service item
  // }

}

interface ItemData {
  ip: string;
  dateConnection: string;
  dateDeconnection: string;
  statut: string;
  debit: number
}