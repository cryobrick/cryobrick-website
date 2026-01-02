# Why this Phone?

## Physical Security Challenge

Bitcoin's cryptography is nearly unbreakable in the digital world. But securing Bitcoin physically? That's where users face real danger. Traditional self-custody methods—paper backups, metal plates, hardware wallets—all expose users to three critical risks: theft by criminals, confiscation by authorities, and recognition by anyone looking. Today, we're addressing these vulnerabilities with a solution that's secure, affordable, and—most importantly—invisible.

## Visible Seed Storage

First problem: visible seed storage. When you write your seed phrase on paper or stamp it into metal, you create a physical beacon that screams 'I own Bitcoin.' These objects are impossible to hide in plain sight. If someone finds them—whether it's a thief, family member, or government official—your holdings are immediately compromised. The very method meant to protect your assets becomes the thing that exposes them.

## Hardware Wallet Limitations

Hardware wallets provide excellent cryptographic security. But they come with four critical shortcomings.

**First**—the secrecy problem. Hardware wallets offer zero plausible deniability. The moment someone sees your Ledger, Trezor, or Coldcard, they know you hold Bitcoin. You can't hide what the device fundamentally is.

**Second**—cost barriers. Not everyone can drop $100 or more on a security device, especially those just starting their Bitcoin journey in emerging markets where it matters most.

**Third**—privacy data leaks. We've seen massive breaches: Ledger, for example, exposed thousands of customers' home addresses, emails, and personal details. These leaks led directly to targeted phishing attacks and even physical threats against users.

**Fourth**—geographic restrictions. If you live in regions where hardware wallets don't ship—and there are many—you're simply out of luck. No access, no self-custody.

We looked at these problems and knew there had to be a better way.

# Secure. Affordable. Inconspicuous. Bitcoin Custody Reimagined

## What Exactly is CryoBrick?

**CryoBrick** is a self-custodial Bitcoin wallet built for feature phones, that turns your feature phone device into an air-gapped cold-storage device, which means no internet connection required, no personal information collected, no waiting for shipping and the setup process is much simple with zero cost for the user.

## How It Works

### Exporting Xpub on Blue Wallet

Export your Extended Public Key (XPUB) from any compatible wallet like Blue Wallet. This allows you to create a watch-only wallet on your connected device for monitoring balances and generating receive addresses.

### Receiving in CryoBrick or Blue (Watch-only Wallet)

Receive Bitcoin using your watch-only wallet. The watch-only wallet can generate receive addresses and monitor your balance, but it cannot spend your funds. All spending requires signing on the air-gapped CryoBrick device.

### Signing & Broadcasting

**PSBT Generation on Blue Wallet (1/3)**: Create a Partially Signed Bitcoin Transaction (PSBT) on your connected device. This contains all the transaction details but requires your private key to sign.

**Signing the PSBT on CryoBrick (2/3)**: Transfer the PSBT to your CryoBrick device via QR code. Sign the transaction in complete isolation—no network connection, no data leaks, no exposure.

**Broadcasting the Signed PSBT (3/3)**: Transfer the signed PSBT back to your connected device via QR code and broadcast it to the Bitcoin network.

## Core Security Features

### Air-Gapped Isolation

Absolute physical separation. Your keys are generated and stored on a device that has never touched a packet of data. The only way data enters or leaves the device is through QR codes—a one-way visual channel that cannot be exploited remotely.

### Plausible Deniability

Unlike hardware wallets, CryoBrick looks like a normal feature phone. There's no way for someone to know you're using it for Bitcoin custody just by looking at it. This provides a crucial layer of physical security that traditional hardware wallets cannot offer.

### Zero Cost

No hardware purchase required. If you already have a feature phone, you can turn it into a cold storage device at zero additional cost. This makes self-custody accessible to everyone, regardless of their financial situation.

### No Shipping, No Waiting

Since CryoBrick runs on feature phones, there's no need to wait for hardware to ship. No customs delays, no shipping restrictions, no geographic barriers. If you can get a feature phone, you can use CryoBrick.

### No Personal Information

We don't collect your data. We don't need your email, address, or any personal information. The wallet runs entirely on your device, with no cloud services, no accounts, and no data collection.

### Simple Setup

The setup process is straightforward. No complex firmware updates, no proprietary software installations. Just install CryoBrick on your feature phone and follow the simple setup wizard.

## Standard Support

Full support for Native SegWit (BIP84) and PSBT signing. CryoBrick is compatible with all major hardware-agnostic wallets like Blue Wallet, Sparrow, and others. You're not locked into any ecosystem.

## Bottom Line

We're not trying to replace hardware wallets entirely. CryoBrick is just giving users another new choice.

Maybe you have a feature phone and want to test cold storage. Maybe you live somewhere hardware wallets don't ship. Maybe you want something that allows plausible deniability, because at the end it's just a normal feature phone.

Whatever your reason, we deliver the same fundamental security promise as hardware wallets: **your private keys stay offline and under your control**.

---

_Secure. Affordable. Inconspicuous. Bitcoin Custody Reimagined._
