import React from 'react'

const DesignGuide = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-2xl overflow-hidden border border-[#5a2316]/60 bg-[#2a0f0a]">
          <object
            data="/docs/幻彩智慧灯语.pdf#toolbar=0&navpanes=0&scrollbar=0"
            type="application/pdf"
            className="w-full h-[80vh]"
          >
            <iframe
              src="/docs/幻彩智慧灯语.pdf"
              className="w-full h-[80vh]"
              title="设计稿预览"
            />
          </object>
        </div>
      </div>
    </div>
  )
}

export default DesignGuide
