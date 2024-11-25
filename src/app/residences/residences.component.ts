import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residance.model'

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {

  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpeg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' },
  ];

  searchTerm: string = '';

  filteredResidences(): Residence[] {
    if (!this.searchTerm.trim()) {
      return this.listResidences;
    }

    return this.listResidences.filter(residence =>
      residence.address.toLocaleLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showAddress(address: string) {
    if (address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      alert(`Adresse : ${address}`);
    }
  }

  toggleFavorite(residence: Residence) {
    alert(`${residence.name} ajouté(e) à vos favoris !`);
  }
}