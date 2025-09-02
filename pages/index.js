export default function Signup() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-100 px-4 py-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-[-60px] w-60 h-60 bg-pink-300 rounded-full blur-3xl opacity-70 z-0" />
      <div className="absolute bottom-0 left-[-60px] w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-70 z-0" />

      <div className="relative z-10 w-[360px] bg-white rounded-3xl p-6 shadow-md">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="w-48 h-48 rounded-full flex items-center justify-center">
            <img src="/image.png" alt="Logo" />
          </div>
          {/* Form */}
          <form className="w-full space-y-4">
            <InputField placeholder="Овог" />
            <InputField placeholder="Нэр" />
            <InputField placeholder="Утасны дугаар" />
            <InputField placeholder="4 оронтой код" />

            <button
              type="submit"
              className="w-full py-2 rounded-lg border border-pink-500 text-pink-500 font-medium hover:bg-pink-100 transition"
            >
              Шинээр бүртгэл үүсгэх
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({ placeholder }) {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
      <span className="text-pink-500 mr-2">📱</span>
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none w-full"
      />
    </div>
  );
}
