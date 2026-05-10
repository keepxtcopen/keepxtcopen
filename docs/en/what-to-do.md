# What You Can Do

> Complaining isn't enough — you need to know what you can actually do. Here's what different people can do, organized by role.

---

## As a Regular Consumer

### 1. Think Before You Buy

If you're considering buying a Xiaotiancai watch for your child, ask yourself a few questions:

- **What do you want the watch for?** If it's just for location tracking and calls, there are plenty of watches that can do that — you don't have to pick Xiaotiancai
- **Does everyone in your child's class use Xiaotiancai?** If so, be prepared — buying another brand means your child probably can't add classmates as friends on the watch
- **Can you accept the device not being under your control?** Xiaotiancai devices have remote management capabilities — in theory, the manufacturer can decide at any time what your device can and can't do
- **Can you accept features being cut or accounts being banned with no recourse?** The user agreement favors the company, and avenues for redress are limited

There are no standard answers to these questions. Everyone's situation is different. But at least you should know this before you buy, not after.

### 2. If You've Already Bought

- **Don't give your child full access to the parent app.** Xiaotiancai's device management ultimately goes through the parent app — the parent account has the highest privileges
- **Periodically check for updates to the user agreement and privacy policy.** Nobody reads them daily, but at least glance at them when major versions update
- **Don't try to root or install unofficial apps.** Under current policy, this will get your account banned with almost no recourse
- **Keep evidence if you have problems.** Screenshots, screen recordings, customer service chat logs — you'll need them if you ever try to assert your rights

### 3. Consider Alternatives

If you've decided you don't want Xiaotiancai, there are other options on the market (this isn't a recommendation, just a list):

- **Huawei Children's Watch** — relatively more open ecosystem, but social features are also limited to Huawei devices
- **Xiaomi Mitu Watch** — value-oriented, features are relatively basic
- **360 Children's Watch** — a more established player, but market share is lower than Xiaotiancai
- **BBK-owned other brands** — yeah, they're actually the same company

> To be honest, the current domestic children's watch market is basically every brand doing their own thing when it comes to social interoperability. This isn't just Xiaotiancai's problem — it's an industry-wide problem. Xiaotiancai just has the largest share and goes the furthest.

---

## As a Developer / Open Source Enthusiast

### 1. Report GPL Violations to GNU FSF

Xiaotiancai watches use the Linux kernel but don't publish source code. You can report this to the **Free Software Foundation** or the **Software Freedom Conservancy (SFC)** .

GNU's website has a dedicated GPL compliance page:

- **GNU GPL Compliance** — https://www.gnu.org/licenses/gpl-compliance.html
- **Software Freedom Conservancy** — https://sfconservancy.org/

When reporting, provide:

- Device model and the Android version it shipped with
- Evidence that the device uses the Linux kernel (e.g., kernel version number screenshots)
- Evidence that the manufacturer hasn't provided source code (e.g., showing no results from searching their website and GitHub)

The SFC has successfully pushed many companies (like LG, Samsung, Cisco) to comply with the GPL. While they mainly focus on overseas markets, they accept reports in both Chinese and English.

If you want to join us, feel free to fork this project and submit a Pull Request.

### 2. Follow and Push on GitHub

- Search for "xiaotiancai kernel" or "imoo kernel source" related issues
- If developers are already working on decompilation or kernel analysis, follow and participate
- If Xiaotiancai ever releases kernel source code, check it for compliance

### 3. Help Regular Users Understand Technical Issues

- Explain what the GPL is and why closed source is a problem in forums
- Translate and spread relevant technical content
- If you have the skills, try analyzing device firmware and publishing your findings

---

## As a User Banned by Cloud Control

### 1. First Confirm What Rule You Actually Violated

Honestly, most of the time users don't even know why they were banned. Common situations:

- Installed an APK via ADB
- Attempted to gain root access
- Bound a bot
- Reverse engineered and called APIs <- (author's experience)
- False positive by the system (less common)

**But the key problem is: these "rules" are not explicitly stated in the user agreement.**

So first, you're "being punished for a rule you didn't know existed."

### 2. Channels for Redress

**Step 1: Contact Customer Service**

It will probably go nowhere, but this is a prerequisite for other channels — you need to show you've tried to resolve it with the company first.

- Xiaotiancai official customer service hotline: 400-610-3999
- Keep records of all call recordings and chat logs

**Step 2: File a 12315 Complaint**

China's unified consumer complaint hotline. You can search for "National 12315 Platform" in WeChat mini-programs to file a complaint directly.

Key points to raise:

- The purchased device had its normal use restricted due to the manufacturer's unilateral determination of a violation
- The user agreement does not explicitly list the specific rules that lead to account bans
- The ban prevents the device from functioning normally, affecting the child's normal communication and safety

**Step 3: Complain to the Ministry of Industry and Information Technology**

If communication functions are restricted, or if the previous step fails, you can file a complaint with the MIIT Telecommunications User Complaint Resolution Center.

Website: https://www.chinatcc.gov.cn/

**Step 4: Media Exposure**

- Post on Heima Complaint (https://tousu.sina.com.cn/)
- Share your experience on Zhihu
- Contact tech bloggers or content creators

Xiaotiancai does care about brand image. Individual user complaints may go unnoticed, but if a story gains traction, they'll feel the pressure.

### 3. Possibility of Collective Action

The issue of children's watch bans is not isolated. If you've been banned, there are likely many others in the same situation.

You can try:

- Find others with the same experience on Coolapk, Tieba, or Zhihu
- File collective complaints to 12315 or MIIT (collective complaints are more effective than individual ones)
- If you have legal resources, consult on whether conditions for a class action lawsuit exist

---

## Finally

I know asserting your rights is hard.

Your opponent isn't a customer service rep or a store — it's a company with a legal team, a PR team, and half the market share.

But doing nothing means: **they'll always think there's nothing wrong with what they're doing.**

Even if just one person makes a different decision because they saw this project, then this project has a reason to exist.
