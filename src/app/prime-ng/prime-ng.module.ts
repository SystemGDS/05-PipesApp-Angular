import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule} from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [],

  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenuModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
