import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'products',
				loadChildren: () =>
					import('./content/products/products.module').then((m) => m.ProductsModule),
				data: {
					title: 'Products List',
				},
			},
			{
				path: 'profile',
				loadChildren: () => import('./content/profile/profile.module').then((m) => m.ProfileModule),
				data: {
					title: 'Yor profile',
				},
			},
			{
				path: '**',
				redirectTo: 'products',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
