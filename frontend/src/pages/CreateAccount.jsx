import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Country data with codes and names
const COUNTRIES = [
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
];

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    gstin: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountry = COUNTRIES.find(c => c.code === e.target.value);
    setFormData((prev) => ({
      ...prev,
      country: e.target.value,
      countryCode: selectedCountry ? selectedCountry.dialCode : "+1",
    }));
  };

  const getPasswordStrength = (password) => {
    if (!password) return { text: "", color: "" };
    if (password.length < 7) return { text: "Weak", color: "text-red-500" };
    if (password.length < 9) return { text: "Fair", color: "text-orange-500" };
    if (
      password.length >= 9 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return { text: "Strong", color: "text-green-500" };
    }
    if (password.length >= 8) return { text: "Good", color: "text-blue-500" };
    return { text: "Fair", color: "text-orange-500" };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const validateForm = () => {
    const errors = [];

    if (!formData.firstName.trim()) errors.push("First name is required");
    if (!formData.lastName.trim()) errors.push("Last name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push("Email is invalid");
    if (!formData.phoneNumber.trim()) errors.push("Phone number is required");
    if (!formData.streetAddress.trim())
      errors.push("Street address is required");
    if (!formData.city.trim()) errors.push("City is required");
    if (!formData.state.trim()) errors.push("State/Province is required");
    if (!formData.postalCode.trim()) errors.push("Postal code is required");
    if (!formData.country.trim()) errors.push("Country is required");
    if (!formData.password) errors.push("Password is required");
    if (formData.password !== formData.confirmPassword)
      errors.push("Passwords don't match");

    // Optional GSTIN validation - only validate if provided
    if (
      formData.gstin.trim() &&
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
        formData.gstin.trim()
      )
    ) {
      errors.push("Invalid GSTIN format");
    }

    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (errors.length > 0) {
      alert("Please fix the following errors:\n" + errors.join("\n"));
      return;
    }
    console.log("Form submitted:", formData);
    alert("Account created successfully!");
  };

  const passwordsMatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;
  const passwordsDontMatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword;

  const selectedCountry = COUNTRIES.find(c => c.code === formData.country);
  const phoneCountry = COUNTRIES.find(c => c.dialCode === formData.countryCode);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-2">Create account</h2>
        {/* Personal Information */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            {/* Phone Number with Country Code */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center z-10">
                <span className="text-lg mr-2">{phoneCountry?.flag || "🇺🇸"}</span>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="text-sm border-none bg-transparent focus:ring-0 focus:outline-none pr-1 cursor-pointer"
                >
                  {COUNTRIES.map((country) => (
                    <option key={country.code} value={country.dialCode}>
                      {country.dialCode}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full p-3 pl-28 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Address Information
          </h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <span className="text-lg">{selectedCountry?.flag || "🌍"}</span>
                </div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                  className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
                >
                  <option value="">Select Country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            {/* GSTIN Field - Full width */}
            <div className="mt-4">
              <input
                type="text"
                name="gstin"
                placeholder="Enter your GSTIN (if any)"
                value={formData.gstin}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <p className="text-sm text-gray-500 mt-1">
                GSTIN is optional. Format: 15 characters (e.g., 22AAAAA0000A1Z5)
              </p>
            </div>
          </div>
        </div>

        {/* Account Security */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Account Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2 text-sm">
                  Password Strength:
                  <span
                    className={`ml-1 font-medium ${passwordStrength.color}`}
                  >
                    {passwordStrength.text}
                  </span>
                </div>
              )}
            </div>
            <div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 pr-10 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    passwordsDontMatch
                      ? "border-red-300 bg-red-50"
                      : passwordsMatch
                      ? "border-green-300 bg-green-50"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {formData.confirmPassword && (
                <div className="mt-2 text-sm">
                  {passwordsMatch && (
                    <span className="text-green-600">✓ Passwords match</span>
                  )}
                  {passwordsDontMatch && (
                    <span className="text-red-600">
                      ✗ Passwords don't match
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}