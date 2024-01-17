import { Component, OnInit } from '@angular/core';
declare var paypal: any;

@Component({
  selector: 'app-verrechnung',
  templateUrl: './verrechnung.component.html',
  styleUrls: ['./verrechnung.component.css']
})
export class VerrechnungComponent implements OnInit {
  ngOnInit(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '0.01' // Der Betrag, den Sie simulieren möchten
            }
          }]
        });
      },
      onApprove: (data:any, actions:any) => {
        return actions.order.capture().then((details: any )=> {
          alert('Zahlung erfolgreich abgeschlossen, ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container');
  }
}
