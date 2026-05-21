import { Component, AfterViewInit } from '@angular/core';
import { UserFormComponent } from '../user-form-component/user-form-component';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-user-dashboard-component',
  imports: [UserFormComponent],
  templateUrl: './user-dashboard-component.html',
  styleUrl: './user-dashboard-component.css',
})
export class UserDashboardComponent implements AfterViewInit {
  showModal = false;

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
    const canvas = document.getElementById('roleDistributionChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chartColors = [
      '#1e40af', // Admin (Primary Container)
      '#6cf8bb', // Editor (Secondary Container)
      '#e2e7ff', // Viewer (Surface Container High)
    ];

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Admin', 'Editor', 'Viewer'],
        datasets: [
          {
            data: [15, 35, 50],
            backgroundColor: chartColors,
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                family: "'Inter', sans-serif",
                size: 13,
              },
              color: '#444653',
            },
          },
          tooltip: {
            backgroundColor: '#283044',
            titleFont: { family: "'Inter', sans-serif", size: 13 },
            bodyFont: {
              family: "'Inter', sans-serif",
              size: 14,
              weight: 'bold',
            },
            padding: 12,
            cornerRadius: 8,
            displayColors: false,
          },
        },
      },
    });
  }
}
