import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  title = 'switch';
  size: NzButtonSize = 'large';
  public onglet = 1; 
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(ip: string): void {
    const index = this.listOfData.findIndex(item => item.ip === ip);
    this.editCache[ip] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(ip: string): void {
    const index = this.listOfData.findIndex(item => item.ip === ip);
    Object.assign(this.listOfData[index], this.editCache[ip].data);
    this.editCache[ip].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.ip] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        ip: "193.5.5.5",
        dateConnection: `03/03/2023 00:00:00`,
        dateDeconnection: `03/03/2023 00:00:00`,
        statut: `Bloqué`, 
        debit: 10
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }

}

interface ItemData {
  ip: string;
  dateConnection: string;
  dateDeconnection: string;
  statut: string;
  debit: number
}