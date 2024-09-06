<?php

namespace App\Http\Requests\User;

use App\Rules\NumericCharactersOnlyRule;
use App\Rules\SecurePasswordRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255|min:3',
            'password' => [new SecurePasswordRule, 'required', 'max:255'],
            'expertise_id' => 'required',
            'crm' => 'required',
            'phone_number' => [new NumericCharactersOnlyRule, 'required', 'size:13'],
            'email' => 'required|email',
            'hiring_date' => 'required',
            'start_service' => 'required',
            'end_service' => 'required',
            'status' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'name is required.',
            'name.max' => 'name is too long.',
            'name.min' => 'name is too short.',
            'email.required' => 'email is required.',
            'email.email' => 'Invalid email address.',
            'phone_number.required' => 'phone_number is required.',
            'phone_number.size' => 'phone_number must be 13 digits.',
            'password.required' => 'password is required.',
            'password.max' => 'password too long.',
            'expertise_id' => 'expertise is required',
            'crm' => 'crm is required',
            'hiring_date' => 'hiring_date is required',
            'start_service' => 'start_service is required',
            'end_service' => 'end_service is required',
            'status' => 'status isrequired',
        ];
    }
}
