import { Component } from '@angular/core';
import { Animal } from '../animal/animal.component';

@Component({

	selector: 'app-animals',
	templateUrl: './animals.component.html'
})

export class AnimalListComponent {

	private animals: any[];

	constructor () {

		this.animals= [   new Animal ('Dog', 'Ben', '21-12-2012'),

						  new Animal ('Cat', 'Cloe', '21-12-2012'),

						  new Animal ('Fish', 'Nemo', '21-12-2012')	
					   ];


		// this.animals = [
		// 	{
		// 		species: 'Dog',
		// 		name: 'Ben',				
		// 		dateOfBirth: '12-12-2012'
		// 	},

		// 	{
		// 		species: 'Cat',
		// 		name: 'Cloe',				
		// 		dateOfBirth: ''
		// 	},

		// 	{
		// 		species: 'Parot',
		// 		name: 'Jargo',				
		// 		dateOfBirth: '24-02-2015'
		// 	},

		// 	{
		// 		species: 'Fish',
		// 		name: 'Nemo',				
		// 		dateOfBirth: '08-08-2016'
		// 	},
		// 	{
		// 		species: 'Horse',
		// 		name: 'Thunder',				
		// 		dateOfBirth: '12-09-2009'
		// 	}




		// ];

	}

	remove(animal) {
		const index = this.animals.indexOf(animal);
		this.animals.splice(index,1);
	}

	// moveToTop(animal) {
	// 	const index = this.animals.indexOf(animal);
	// 	this.animals.splice(index,0,animal);
	// }

}