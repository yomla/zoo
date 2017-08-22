import { Component } from '@angular/core';

@Component({

	selector: 'app-animals',
	templateUrl: './animals.component.html'
})

export class AnimalListComponent {

	private animals: any[];

	constructor () {

		this.animals = [
			{
				kind: 'Dog',
				name: 'Ben',				
				dateOfBirth: '12-12-2012'
			},

			{
				kind: 'Cat',
				name: 'Cloe',				
				dateOfBirth: ''
			},

			{
				kind: 'Parot',
				name: 'Jargo',				
				dateOfBirth: '24-02-2015'
			},

			{
				kind: 'Fish',
				name: 'Nemo',				
				dateOfBirth: '08-08-2016'
			},
			{
				kind: 'Horse',
				name: 'Thunder',				
				dateOfBirth: '12-09-2009'
			}

		];

	}

	remove(animal) {
		const index = this.animals.indexOf(animal);
		this.animals.splice(index,1);
	}

}