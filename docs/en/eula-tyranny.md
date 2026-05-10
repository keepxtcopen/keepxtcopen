# User Agreement Unfair Clause Analysis

> The following analysis is based on the June 26, 2023 version of the Xiaotiancai APP User Agreement and End User Software License Agreement (EULA). If you find updated agreements, feel free to submit a PR.

---

## Bottom Line First

Xiaotiancai's user agreement isn't the worst in the industry. But there are a few real problems.

Collectively, these clauses convey one message: **You bought the device, but how it works and whether you can keep using it is ultimately up to them.**

---

## Agreement Versions

- **Xiaotiancai APP User Agreement:** Updated June 26, 2023
- **End User Software License Agreement (EULA):** Updated June 26, 2023
- **Official link:** https://static.watch.okii.com/watch/user_agreement/index.html

---

## 1. Unilateral Right to Modify the Agreement

Many user agreements have this clause, and Xiaotiancai is no exception.

**APP User Agreement, Article 19** reads:

> Xiaotiancai may revise this agreement at any time based on updates to this service. The updated agreement terms will replace the original terms once published.
>
> If revisions to this service or agreement seriously affect users or severely restrict access to or use of this service, we will notify you within a reasonable period before the change.

The agreement says they'll give advance notice for major changes. But here's the problem:

- Who defines "seriously affect users"? Obviously the company itself.
- What is a "reasonable period"? The agreement doesn't say.
- How will notification be delivered? The agreement doesn't clarify either.
- So-called "notification" might just be updating a page somewhere that users never see.

So-called advance notice is probably just a formality in practice.

---

## 2. Scope of Data Collection

Article 5 of the agreement lists the APP's functional scope, including location, social communication, exercise health, app management, etc. Specific collection details, storage methods, and sharing scope are in the privacy policy.

> Privacy policy link: https://static.watch.okii.com/watch/privacy_explain/index.html

For a children's device, the key questions remain:

- Are the principles of necessity and minimization actually followed?
- Are data security measures adequate?
- There's no third-party audit, so the outside world can't verify any of this.

---

## 3. Right to Terminate Service

**APP User Agreement, Article 18 (Termination or Suspension by Xiaotiancai):**

> We may suspend, restrict, cancel, or terminate your access to all or part of this service in accordance with applicable law, without incurring any liability to any individual or third party.
>
> If any of the following circumstances occur, we may immediately suspend, restrict, cancel, or terminate your access to all or part of this service without prior notice:
> - (a) You violate, or Xiaotiancai has reason to believe you are about to violate, this agreement
> - (b) You or anyone acting on your behalf engages in fraudulent or illegal activities
> - (c) Responding to requests from law enforcement or government agencies under valid legal process
> - (d) Performing emergency system or hardware maintenance or updates
> - (e) Due to unforeseen technical, security, or business reasons

Note the wording of clause (a) — **"Xiaotiancai has reason to believe you are about to violate this agreement"** — the bar is extremely low. You don't need to have actually violated anything. If the company "feels" you're about to, they can terminate service.

And they don't have to notify you in advance, and they bear no liability. The consequences of termination and how fees are handled are not clearly stated in the agreement.

**EULA Article 14 (Limitation of Liability):**

> Xiaotiancai's total liability for all your losses shall not exceed the price you paid for the Xiaotiancai smartwatch.

Even if Xiaotiancai is wrong, the most they'll pay is the cost of the watch.

---

## 4. Prohibited Conduct

**EULA Articles 4 and 7** explicitly prohibit the following:

> You may not copy, disassemble, reverse engineer, decompile, disassemble, or create derivative works of the software.
>
> You may not attempt to tamper with, bypass, alter, void, or circumvent any digital rights management system related to the software.
>
> You may not engage in any conduct that harms computer network security, including but not limited to: unauthorized probing, scanning, testing vulnerabilities, interfering with or disrupting normal operation, etc.

Rooting (obtaining system privileges), decompiling, and bypassing system restrictions do have corresponding prohibitions in the EULA.

**The problem is:** The agreement prohibits technical acts like "decompiling" and "bypassing DRM," but in practice, accounts get banned for "installing third-party apps" or "rooting the device" — there is a correlation, but the agreement doesn't plainly state "root and we'll ban your account." **The consequence of banning itself is not clearly disclosed in the agreement.**

Additionally, **APP User Agreement, Article 9**'s list of prohibited conduct includes:

> Copying, modifying, reverse engineering, disassembling, decompiling, dismantling, attempting to export source code, decoding

These clauses technically cover rooting and modifying the system.

### But There's a Key Contradiction: Open Source Licenses

**EULA Article 1(2) explicitly states:**

> The Xiaotiancai smartwatch may also contain software components protected by third-party copyright and licensed under open source software licenses... When you use these open source software components, the terms and conditions of the open source software license shall apply. This agreement does not change any rights or obligations you have under such open source software licenses. **If any conflict exists between the license conditions stated in this agreement and the open source software license concerning any open source software component, the open source software license shall prevail.**

The agreement itself says: **Open source components follow the open source license, the EULA doesn't apply.**

This raises several issues:

**First, Xiaotiancai itself doesn't comply with open source licenses.** The watch runs on the Linux kernel (GPLv2), which requires source code publication. Xiaotiancai hasn't released it. They don't follow open source licenses themselves, yet use the EULA to restrict users from modifying the same GPL-protected parts — that doesn't hold logically.

**Second, rooting mostly modifies open source parts.** Aside from some hook modules, ramdisk.cpio, kernel modules, boot partitions, etc. are either derivatives of the Linux kernel or components of the Android Open Source Project (AOSP). These components' licenses (GPL, Apache 2.0, etc.) already allow user modification. Xiaotiancai uses the EULA to prohibit users from modifying these open source components — contradicting their own clause that "open source licenses take precedence."

**Third, malicious removal of open source software.** For example, Easy Class Schedule — an open source app that was in the app store, supposedly removed because a youth developer event ended, but actually because Xiaotiancai developed a closed-source "replacement." This isn't technical security review; it's business-model-driven censorship.

So the logic is: **When it benefits them, they cite the EULA. When it doesn't (open source licenses), they pretend it doesn't exist.**

---

## 5. Dispute Resolution

**APP User Agreement, Article 20:**

> This agreement is concluded in Dongguan City, Guangdong Province, the People's Republic of China. If disputes arise during the performance of this agreement, they shall be resolved through negotiation; if negotiation fails, either party may file a lawsuit with the people's court having jurisdiction at the place where this agreement is concluded.

The agreement clearly specifies the jurisdiction court is in Dongguan, and it goes through litigation, not arbitration. If you want to enforce your rights, you have to sue in Dongguan courts.

For users outside Guangdong, the cost of litigation in a different city is very high. This is a classic problem with standard-form contracts — setting the dispute location at the company's headquarters.

---

## 6. Account Ownership

**APP User Agreement, Article 7:**

> Account ownership belongs to Xiaotiancai, and you only have the right to use the account within the scope permitted by Xiaotiancai.

The account you registered — the company owns it. You only have "usage rights." Theoretically, the company can reclaim your account for any reason.

---

## Additional Notes

This isn't about demanding special treatment from Xiaotiancai. Pro-company clauses are common in the industry.

But the problem is:

1. This is a **children's device** — the decision-maker and user are separate (parents buy, children use)
2. The level of control far exceeds ordinary smart devices
3. The impact of problems isn't just switching phones — the child's communication tool is directly cut off

Looking at all of this together, "the whole industry is like this" doesn't cut it anymore.
