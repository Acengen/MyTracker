import { ListComponent } from './list/list.component';
import { AuthGuard } from './guards/auth.guard';
import { ValuesOfuserComponent } from './register/valuesOfuser/valuesOfuser.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';

export const approute: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:RegisterComponent},
    // {path:"values", component:ValuesOfuserComponent, canActivate:[AuthGuard]},
    {path:'',
     runGuardsAndResolvers:'always',
     canActivate:[AuthGuard],
     children:[
         {path:"values", component:ValuesOfuserComponent},
         {path:'list', component:ListComponent}
     ]
    },
    
]