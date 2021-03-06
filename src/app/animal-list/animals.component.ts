import { Component } from '@angular/core';
import { Animal } from '../animal/animal.component';
import { Sector } from '../sector/sector.component';

@Component({

	selector: 'app-animals',
	templateUrl: './animals.component.html',
	styleUrls: ['./animals.component.css']
})

export class AnimalListComponent {

	animals: any[];
	sectors: any[];
	// sector: Sector = new Sector('','');
	newAnimal: Animal = new Animal('','','', new Sector('',''));

	constructor () {

		this.sectors = [  new Sector ('Water-animals', 'Water'),

						  new Sector ('Fawl','Kages'),

						  new Sector ('Predators', 'Kages')	

					   ];

		this.animals= [   new Animal ('Dog', 'Ben', '21-12-2012', this.sectors[0]),

						  new Animal ('Cat', 'Cloe', '21-12-2012', this.sectors[1]),

						  new Animal ('Fish', 'Nemo', '21-12-2012', this.sectors[2])	
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

	moveToTop(animal) {
		const index = this.animals.indexOf(animal);
		this.animals.splice(index,1);
		this.animals.unshift(animal);
	}

	addAnimal(animal) {

		this.animals.push(animal);
		this.newAnimal = new Animal('','','', this.sectors[0]);

	}

	showAnimalsBySector(sector) {
		
		const list=[];	
		
		this.animals.forEach(function(animal){

			if(animal.sector && animal.sector.name == sector.name) 
				list.push(animal.name); 
		});		


		alert(list.toString());
	}
}