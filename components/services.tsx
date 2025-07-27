export default function Services() {
  return (
    <div className="mb-32 md:mb-64">
      <h2 className="text-base font-normal text-gray-600 mb-8">3 ways I can help</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="mb-6">
            <div className="text-base font-normal text-gray-800 mb-2">0 to 1</div>
            <div className="text-xl md:text-2xl font-normal text-gray-900 mb-4">
              Figure out winning product strategies
            </div>
          </div>
          <div className="flex items-center group">
            <a href="#tide" className="text-sm text-gray-600 hover:text-gray-900 transition-colors mr-1">
              Learn more
            </a>
            <span className="text-gray-600">→</span>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="mb-6">
            <div className="text-base font-normal text-gray-800 mb-2">1 and beyond</div>
            <div className="text-xl md:text-2xl font-normal text-gray-900 mb-4">
              Hands-on design and mentorship in hyper-growth
            </div>
          </div>
          <div className="flex items-center group">
            <a href="#insurify" className="text-sm text-gray-600 hover:text-gray-900 transition-colors mr-1">
              Learn more
            </a>
            <span className="text-gray-600">→</span>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="mb-6">
            <div className="text-base font-normal text-gray-800 mb-2">PLG</div>
            <div className="text-xl md:text-2xl font-normal text-gray-900 mb-4">
              Drive revenue with product-led motions
            </div>
          </div>
          <div className="flex items-center group">
            <a href="#hotjar" className="text-sm text-gray-600 hover:text-gray-900 transition-colors mr-1">
              Learn more
            </a>
            <span className="text-gray-600">→</span>
          </div>
        </div>
      </div>
    </div>
  )
}
