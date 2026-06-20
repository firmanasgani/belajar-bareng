import { Heart, Rocket } from 'lucide-react'
import { COUPLE, WEDDING_DATE } from '@/lib/constants'
import { formatWeddingDate } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-void border-t border-cosmic/20 py-12 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Rocket size={20} className="text-cosmic" />
          <span className="font-cinzel text-space-white text-lg tracking-widest">
            {COUPLE.partner1} &amp; {COUPLE.partner2}
          </span>
          <Rocket size={20} className="text-cosmic scale-x-[-1]" />
        </div>

        <p className="font-mono text-silver text-sm">
          {formatWeddingDate(WEDDING_DATE)}
        </p>

        <p className="font-cinzel text-gold/80 text-sm tracking-wider">
          &ldquo;See you among the stars&rdquo;
        </p>

        <div className="flex items-center justify-center gap-2 text-silver/50 text-xs font-inter mt-6">
          <span>Made with</span>
          <Heart size={12} className="text-stardust fill-stardust" />
          <span>for {COUPLE.partner1} &amp; {COUPLE.partner2}</span>
        </div>
      </div>
    </footer>
  )
}
