import { Component, OnInit, Output, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html'
})
export class WalletHistoryComponent implements OnInit {
  public settings = {
    columns: {
      AddSub: {
        title: 'Subject',
        type: 'html',
        valuePrepareFunction: (val: string) => {
          if (val.toLowerCase() === 'add') {
            return '<span class="label label-success">' + val.toUpperCase() + '</span>';
          }
          if (val.toLowerCase() === 'sub') {
            return '<span class="label label-warning">' + val.toUpperCase() + '</span>';
          }
        }
      },
      Amount: {
        title: 'Amount',
        type: 'html',
        valuePrepareFunction: (val: number) => {
          return val.toFixed(8);
        }
      },
      Note: { title: 'Note' },
      CreatedDate: { title: 'CreatedDate' },
      pager: {
        display: true,
        perPage: 10
      },
      actions: {
        columnTitle: 'Action',
        add: false,
        edit: false,
        delete: false,
        position: 'left'
      },
      attr: {
        class: 'table table-striped table-bordered table-hover'
      },
      defaultStyle: false
    }
  };
  @Input() data: any;
  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource();
    this.source.load(this.data);
  }
  ngOnInit() {
  }
}
