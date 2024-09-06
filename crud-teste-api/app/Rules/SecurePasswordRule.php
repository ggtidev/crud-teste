<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class SecurePasswordRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (strlen($value) < 8) {
            $fail(':attribute is too short.');
        }

        if (!preg_match('/[A-Z]/', $value)) {
            $fail(':attribute must contain upcase letters.');
        }

        if (!preg_match('/[a-z]/', $value)) {
            $fail(':attribute must contain lowercase letters.');
        }

        if (!preg_match('/[0-9]/', $value)) {
            $fail(':attribute must contain digits.');
        }

        if (!preg_match('/[!@#$%^&*(),.?":{}|<>]/', $value)) {
            $fail(':attribute must contain special characters');
        }
    }
}
