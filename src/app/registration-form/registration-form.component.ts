import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  branches: any[] = [];
  currentLanguage: 'en' | 'ar' = 'en';
  translations: any = {
    en: {
      title: 'Registration',
      name: 'Name',
      email: 'E-mail',
      phoneNumber: 'Phone Number',
      favoriteBranch: 'Favorite Branch',
      submit: 'Submit',
      successMessage: 'Registration successful!',
      failMessage: 'Please fill out all fields correctly.',
      nameMessage: 'Please enter a valid name.',
      emailMessage: 'Please enter a valid email.',
      phoneMessage: 'Please enter a valid Phone Number.',
      branchMessage: 'Please select a branch.',
      mapMessage: 'failed to load google map, server error or the specified branch not found.',
    },
    ar: {
      title: 'التسجيل',
      name: 'اسم',
      email: 'البريد الإلكتروني',
      phoneNumber: 'رقم الهاتف',
      favoriteBranch: 'الفرع المفضل',
      submit: 'إرسال',
      successMessage: 'تم التسجيل بنجاح!',
      failMessage: 'جميع الخانات مطلوبة',
      nameMessage: 'ادخل اسم مستخدم صحيح',
      emailMessage: 'ادخل بريد الكتروني صحيح',
      phoneMessage: 'ادخل رقم هاتف صحيح',
      branchMessage: 'اختر فرع',
      mapMessage: 'لا يمكن تحميل خريطة جوجل هنالك خطأ بالسيرفر او الفرع المحدد غير موجود',
    },
  };
  center: google.maps.LatLngLiteral;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition: google.maps.LatLngLiteral;

  constructor(private fb: FormBuilder, private http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      favoriteBranch: ['', [Validators.required]],
    });

    this.loadBranches();
  }

  loadBranches() {
    this.http.get('http://81.29.111.142:8085/WRBOBSB/api/getBranches').subscribe(
      (data: any) => {
        this.branches = Object.values(data.result);

        const ziziniaBranch = this.branches.find(branch => branch.branchname === 'Zizinia');
        if (ziziniaBranch) {
          const latitude = parseFloat(ziziniaBranch.branchlat);
          const longitude = parseFloat(ziziniaBranch.branchlng);
          this.center = { lat: latitude, lng: longitude };
          this.markerPosition = { lat: latitude, lng: longitude };
        } else
          this.showErrorToast('Zizinia branch not found');
      },
      (error) => {
        this.showErrorToast('Failed to load branches');
      }
    );
  }

  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    await toast.present();
  }

  async showSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'success',
    });
    await toast.present();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.showSuccessToast(this.translations[this.currentLanguage].successMessage);
      this.registrationForm.reset();
    } else {
      this.showErrorToast(this.translations[this.currentLanguage].failMessage);
    }
  }
}
