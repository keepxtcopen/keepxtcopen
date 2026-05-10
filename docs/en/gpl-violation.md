# GPL Violation: Closed-source Android Kernel

> It's not "they might have violated," it's "they definitely didn't comply with the GPL."

---

## First, What Is the GPL

The GPL (GNU General Public License) is an open source license. Simply put:

- You can freely use code licensed under the GPL
- **But if you modify the code and distribute the product, you must release the modified source code**
- The Linux kernel uses GPLv2 — this is a hard requirement, not negotiable

Xiaotiancai watches run Android, and Android's foundation is the Linux kernel. This means if you use the Linux kernel in a product and sell it, you must provide the kernel source code (including your modifications).

This isn't a gray area. Google itself dutifully publishes Pixel kernel source code on [kernel.google.com](https://kernel.google.com). Samsung does. Xiaomi does (though slowly). OPPO does too.

## Xiaotiancai Didn't

As of the day this project exists, Xiaotiancai has not published kernel source code for any of their devices through any public channel.

Go to their official website — nothing.
Search GitHub for "xiaotiancai" or "imoo kernel" — nothing.
Check the kernel mailing lists — nothing.

This isn't a "can't find it" problem — they simply never released it.

## Why This Is a Violation

GPLv2's terms are crystal clear:

> If you distribute copies of such a program, you must also make the source code available.

You sold watches with the Linux kernel installed — that's "distribute copies" — so you must provide the source code. No exceptions.

Some companies argue "we used an unmodified kernel" — you still have to provide the source code. And Xiaotiancai's watches are definitely modified — they need to adapt Unisoc or other SoC solutions, write driver adaptations, and tune various hardware. There's no way they didn't modify it.

## Why So Many Companies Don't Release

That's the reality. Among domestic Android device manufacturers in China, Xiaotiancai is far from the only one not complying with the GPL. Many small manufacturers and white-label devices don't release either. But that doesn't make it right.

It's just that nobody was watching the children's smartwatch category before.

## What Actual Impact Does This Have

Not releasing kernel source code means:

1. **Security research is impossible.** Backdoors? Vulnerabilities? Nobody can audit.
2. **Third-party ROMs are impossible.** Stuck with the crappy stock firmware.
3. **Device lifecycle is entirely controlled by the manufacturer.** They say no more updates, your device is dead.
4. **Want to fix a bug yourself?** Not a chance.

A device for children, completely black-boxed, with no one allowed to audit its underlying code.

Does that sit right with you?

---

### Related Resources

- [GPLv2 Original Text](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
- [Linux Kernel LICENSE File](https://github.com/torvalds/linux/blob/master/COPYING)
- To check if Xiaotiancai has ever released source code, go to [kernel.org](https://kernel.org) or check the GPL source code request mailing list directly.
