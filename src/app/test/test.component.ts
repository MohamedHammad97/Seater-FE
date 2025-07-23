import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  kpis = [
    { label: 'Total Sales', value: '$3,750', change: '+12%' },
    { label: 'Orders', value: '245', change: '+5%' },
    { label: 'Customers', value: '1,280', change: '-2%' },
    { label: 'Products', value: '318' },
  ];

  recentOrders = [
    { id: '#1254', name: 'John Doe', date: 'Apr 24, 2024', amount: '$189.99' },
    { id: '#1253', name: 'Jane Smith', date: 'Apr 23, 2024', amount: '$89.99' },
    { id: '#1252', name: 'Michael Brown', date: 'Apr 22, 2024', amount: '$149.99' },
  ];

  topProducts = [
    { name: 'Smartphone', sold: 1200 },
    { name: 'Wireless Earbuds', sold: 950 },
    { name: 'Laptop', sold: 750 },
    { name: 'Smartwatch', sold: 630 },
  ];
}
