// blog/data/posts.js
// Fixed and properly structured blog posts data

const blogPosts = [
  {
    id: 1,
    title: "How Does PAYE Work in Kenya?",
    excerpt: "For most salaried workers in Kenya, PAYE – short for Pay As You Earn – is a standard deduction on their monthly payslip.",
    content: `
      <h2>Introduction</h2>
      <p>For most salaried workers in Kenya, PAYE – short for Pay As You Earn – is a standard deduction on their monthly payslip. It is the system through which income tax is collected by the Kenya Revenue Authority (KRA) directly from employees' salaries before they receive them.</p>
      <p>Even though PAYE is common, many Kenyans do not fully understand how it works. How is it calculated? What deductions are involved? Who qualifies to pay it? If you are an employee, employer, or business owner in Kenya, understanding PAYE can help you stay compliant, avoid penalties, and better manage your finances.</p>

      <h2>1. What Is PAYE and Who Pays It?</h2>
      <p>PAYE is the method used by the Kenyan government to collect income tax from people who earn a regular wage or salary. Instead of paying tax at the end of the year, a portion of your income is deducted automatically each month and sent to KRA by your employer.</p>
      <p><strong>Who Pays PAYE?</strong></p>
      <ul>
        <li>All employees earning above a certain monthly income threshold</li>
        <li>Both permanent and contract workers</li>
        <li>Kenyan citizens and foreigners working in Kenya (if employed)</li>
      </ul>
      <p>If your total monthly income is below the taxable bracket, you may not be subject to PAYE. However, once your income goes above the threshold, your employer must begin deducting and remitting PAYE to the KRA.</p>

      <h2>2. How Is PAYE Calculated in Kenya?</h2>
      <p>The amount of PAYE you pay depends on your gross monthly income and the current income tax bands set by the KRA. Tax is applied in a graduated format, meaning the more you earn, the higher the percentage of tax you pay on each portion of your income.</p>
      <p><strong>As of the 2024/2025 tax year, the monthly PAYE tax bands are:</strong></p>
      <ul>
        <li>First KSh 24,000: 10 percent</li>
        <li>Next KSh 8,333: 25 percent</li>
        <li>Income above KSh 32,333: 30 percent</li>
      </ul>
      
      <div class="example-box">
        <div class="example-title">💡 PAYE Calculation Example</div>
        <p><strong>Monthly Salary: KSh 60,000</strong></p>
        <ul>
          <li>First KSh 24,000 taxed at 10% = KSh 2,400</li>
          <li>Next KSh 8,333 taxed at 25% = KSh 2,083.25</li>
          <li>Remaining KSh 27,667 taxed at 30% = KSh 8,300.10</li>
        </ul>
        <p><strong>Total PAYE before reliefs = KSh 12,783.35</strong></p>
        <p>Then subtract applicable reliefs (like personal relief) to arrive at the final PAYE payable.</p>
      </div>

      <h2>3. Allowable Deductions and Reliefs</h2>
      <p>KRA allows for certain deductions and reliefs to reduce the amount of tax you pay through PAYE. These are legal and often meant to encourage savings, insurance, and social welfare participation.</p>
      <p><strong>Common Reliefs</strong></p>
      <ul>
        <li><strong>Personal Relief:</strong> KSh 2,400 per month (2024)</li>
        <li><strong>Insurance Relief:</strong> Up to 15% of insurance premiums paid</li>
        <li><strong>Retirement Contributions:</strong> Contributions to registered pension schemes or NSSF are deductible</li>
        <li><strong>Mortgage Interest:</strong> Interest on home loans may be deductible</li>
        <li><strong>Disability Relief:</strong> Full relief up to a set income limit for registered persons</li>
      </ul>

      <h2>4. Employer Responsibilities Under PAYE</h2>
      <p>Employers play a crucial role in the PAYE process. They are responsible for deducting the correct amount from employee salaries and remitting it on time.</p>
      <p><strong>Key Employer Duties:</strong></p>
      <ul>
        <li>Deduct PAYE accurately using current tax bands</li>
        <li>Remit PAYE to KRA by the 9th of the following month</li>
        <li>Issue P9 forms annually</li>
        <li>Provide payslips showing PAYE and other deductions (NHIF, NSSF)</li>
      </ul>

      <h2>5. Employee Responsibilities and PAYE Returns</h2>
      <p>Even though your employer submits PAYE, you are still required to file your annual returns.</p>
      <p><strong>What You Need to Do:</strong></p>
      <ul>
        <li>Check your payslip to verify PAYE deductions</li>
        <li>Register on <a href="https://itax.kra.go.ke" target="_blank" rel="noopener">iTax</a></li>
        <li>File your return between January and June annually</li>
        <li>Declare other income (e.g. rent, freelance)</li>
      </ul>

      <h2>6. Common PAYE Mistakes to Avoid</h2>
      <div class="highlight-box">
        <h3>⚠️ Important Reminders</h3>
        <ul>
          <li>Not filing returns – even if PAYE is deducted</li>
          <li>Wrong KRA PIN or employer details on iTax</li>
          <li>Forgetting to update insurance or mortgage reliefs</li>
          <li>Employer failing to remit deducted PAYE</li>
        </ul>
      </div>

      <h2>7. PAYE for Different Income Types</h2>
      <p><strong>a. Permanent Employees</strong></p>
      <p>Most full-time salaried employees are taxed through the standard PAYE system.</p>

      <p><strong>b. Contract and Temporary Workers</strong></p>
      <p>They may be taxed under PAYE if on payroll, or else via withholding tax/self-assessment.</p>

      <p><strong>c. Bonuses, Commissions, and Overtime</strong></p>
      <p>These earnings are taxed just like your basic salary and may push your income into a higher band.</p>

      <p><strong>d. Fringe Benefits</strong></p>
      <p>Perks like housing or car benefits are taxed separately under fringe benefit tax, usually paid by the employer.</p>

      <h2>8. PAYE vs Other Deductions</h2>
      <ul>
        <li><strong>PAYE:</strong> Income tax based on salary, collected by KRA</li>
        <li><strong>NHIF:</strong> Health insurance, fixed monthly rates</li>
        <li><strong>NSSF:</strong> Retirement contributions, typically 6% of salary</li>
        <li><strong>HELB:</strong> Loan repayment for graduates with education loans</li>
      </ul>

      <h2>9. Tools and Resources for PAYE in Kenya</h2>
      <ul>
        <li><strong>KRA PAYE Calculator:</strong> Estimate monthly PAYE online</li>
        <li><strong>iTax Portal:</strong> File returns, check ledger, generate P9s</li>
        <li><strong>Payroll Software:</strong> Automates PAYE calculations for accuracy</li>
        <li><strong>Tax Consultants:</strong> Useful for complex income or tax situations</li>
      </ul>

      <div class="highlight-box">
        <h3>💡 Pro Tip</h3>
        <p>Use our advanced PAYE calculator to see exactly how much tax you'll pay and discover potential savings through various deductions and reliefs!</p>
      </div>

      <h2>10. Future Changes and Reforms to PAYE</h2>
      <ul>
        <li><strong>Real-Time Tax Collection:</strong> Integration with payroll systems</li>
        <li><strong>Increased Digital Audits:</strong> AI used to flag inconsistencies</li>
        <li><strong>Changes in Reliefs and Bands:</strong> Adjustments made by government</li>
        <li><strong>Universal Filing:</strong> Even nil income filers encouraged to submit returns</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Understanding how PAYE works in Kenya is not just important for financial awareness – it is a legal obligation that affects nearly every working Kenyan. From knowing your tax band to claiming the right reliefs, to checking your payslip for compliance, every small detail matters.</p>
      <p>Whether you are an employee trying to decode your salary deductions or an employer managing payroll, mastering PAYE is essential for staying compliant and avoiding penalties. With tools like the iTax portal, KRA calculator, and modern payroll software, you now have everything you need to stay on track.</p>

      <h2>FAQs</h2>

      <h3>1. What does PAYE stand for in Kenya?</h3>
      <p>PAYE stands for Pay As You Earn. It is a method of collecting income tax directly from employees' salaries on a monthly basis.</p>

      <h3>2. How can I check if my employer is submitting PAYE?</h3>
      <p>Log into your iTax account and view your tax ledger to confirm whether PAYE has been correctly submitted by your employer.</p>

      <h3>3. Do I need to file returns even if PAYE is deducted?</h3>
      <p>Yes. Every taxpayer in Kenya is required to file an annual tax return, even if all tax was already deducted through PAYE.</p>

      <h3>4. Can I get a refund if I overpaid PAYE?</h3>
      <p>Yes. If you overpaid PAYE, you can apply for a refund when you file your tax return. KRA will review and issue the refund if everything checks out.</p>

      <h3>5. What is a P9 form and why do I need it?</h3>
      <p>A P9 form is a summary of your yearly income, PAYE deductions, and reliefs provided by your employer. It is necessary when filing your individual tax return on iTax.</p>
    `,
    category: "tax-tips",
    
    // Image configuration (with fallback)
    images: {
      featured: "assets/images/featured/paye-guide-kenya.webp",
      icon: "assets/images/icons/tax-calculator-icon.svg",
      alt: "Kenya PAYE tax calculation guide and explanation",
      
    },
    
    // Fallback for when images aren't available
    fallback: {
      icon: "💰",
      backgroundColor: "#667eea"
    },
    
    date: "2025-01-15",
    readTime: "12 min read",
    featured: true,
    author: {
      name: "Kenya Tax Expert",
      bio: "Certified tax professional with 15+ years experience in Kenya's tax system"
    },
    slug: "how-does-paye-work-in-kenya",
    
    // SEO optimization
    seo: {
      keywords: ["PAYE Kenya", "Kenya tax calculation", "KRA tax", "iTax filing", "Kenya income tax"],
      metaDescription: "Complete guide to understanding PAYE (Pay As You Earn) in Kenya. Learn how it's calculated, deductions, employer responsibilities, and filing requirements."
    }
  },

  {
    id: 2,
    title: "Complete Guide to Kenya Tax Brackets 2025",
    excerpt: "Understanding the latest tax brackets and how they affect your take-home salary. Learn about changes in Kenya's tax structure for 2025.",
    content: `
      <h2>Introduction to Kenya's Tax System 2025</h2>
      <p>Kenya's tax system continues to evolve, with 2025 bringing important updates to tax brackets, reliefs, and compliance requirements. Whether you're a salaried employee, business owner, or freelancer, understanding these changes is crucial for proper tax planning.</p>

      <h2>2025 Tax Brackets Breakdown</h2>
      <p>The Kenya Revenue Authority has structured income tax in progressive brackets, meaning higher earners pay higher rates on portions of their income.</p>

      <div class="example-box">
        <div class="example-title">💡 2025 Monthly Tax Brackets</div>
        <ul>
          <li><strong>First KSh 24,000:</strong> 10% tax rate</li>
          <li><strong>Next KSh 8,333 (KSh 24,001 - 32,333):</strong> 25% tax rate</li>
          <li><strong>Next KSh 467,667 (KSh 32,334 - 500,000):</strong> 30% tax rate</li>
          <li><strong>Next KSh 300,000 (KSh 500,001 - 800,000):</strong> 32.5% tax rate</li>
          <li><strong>Above KSh 800,000:</strong> 35% tax rate</li>
        </ul>
      </div>

      <h2>What's New in 2025?</h2>
      <p>Several important changes have been implemented for the 2025 tax year:</p>
      <ul>
        <li>Introduction of higher tax brackets for very high earners</li>
        <li>Updated relief amounts and eligibility criteria</li>
        <li>Enhanced digital compliance requirements</li>
        <li>New deduction categories for green investments</li>
      </ul>

      <h2>Tax Relief and Deductions</h2>
      <div class="highlight-box">
        <h3>Available Tax Reliefs for 2025</h3>
        <ul>
          <li><strong>Personal Relief:</strong> KSh 2,400 per month</li>
          <li><strong>Insurance Relief:</strong> 15% of premiums (max KSh 5,000/month)</li>
          <li><strong>Pension Contributions:</strong> Up to KSh 30,000/month</li>
          <li><strong>Mortgage Interest:</strong> Up to KSh 30,000/month</li>
          <li><strong>Post-Retirement Medical:</strong> Up to KSh 15,000/month</li>
        </ul>
      </div>

      <h2>Practical Tax Planning Strategies</h2>
      <p>Understanding tax brackets helps you make informed financial decisions:</p>
      <ul>
        <li><strong>Salary Structuring:</strong> Optimize your compensation package</li>
        <li><strong>Timing Income:</strong> Plan bonuses and additional income</li>
        <li><strong>Maximizing Deductions:</strong> Use all available reliefs</li>
        <li><strong>Investment Planning:</strong> Consider tax-efficient investments</li>
      </ul>

      <h2>Digital Compliance Requirements</h2>
      <p>KRA has enhanced digital requirements for 2025:</p>
      <ul>
        <li>Mandatory iTax filing for all income earners</li>
        <li>Real-time payroll reporting for employers</li>
        <li>Digital receipts and invoice requirements</li>
        <li>Enhanced audit trails and documentation</li>
      </ul>

      <div class="example-box">
        <div class="example-title">🧮 Use Our Calculator</div>
        <p>Our advanced PAYE calculator is updated with all 2025 tax brackets and reliefs. Calculate your exact tax liability and discover optimization opportunities!</p>
      </div>
    `,
    category: "tax-tips",
    
    images: {
      featured: "assets/images/featured/tax-brackets-2025.webp",
      icon: "assets/images/icons/tax-brackets-icon.svg",
      alt: "Kenya 2025 tax brackets visualization and guide"
    },
    
    fallback: {
      icon: "📊",
      backgroundColor: "#48bb78"
    },
    
    date: "2025-01-10",
    readTime: "8 min read",
    featured: false,
    author: {
      name: "Tax Policy Analyst",
      bio: "Specialist in Kenya tax policy and regulatory changes"
    },
    slug: "kenya-tax-brackets-2025-guide",
    
    seo: {
      keywords: ["Kenya tax brackets 2025", "tax rates Kenya", "income tax bands", "KRA tax brackets"],
      metaDescription: "Complete guide to Kenya's 2025 tax brackets, rates, and reliefs. Understand how the progressive tax system affects your income."
    }
  },

  {
    id: 3,
    title: "Maximizing Tax Deductions: A Kenyan Employee's Guide",
    excerpt: "Discover all the legal ways to reduce your tax burden through deductions and reliefs available to Kenyan taxpayers.",
    content: `
      <h2>Understanding Tax Deductions in Kenya</h2>
      <p>Tax deductions are legal ways to reduce your taxable income, thereby lowering the amount of tax you pay. Many Kenyan employees miss out on significant savings simply because they don't know what deductions are available.</p>

      <h2>Pension Contributions: Your Best Tax Saver</h2>
      <p>Contributing to a registered pension scheme is one of the most effective ways to reduce your tax liability while securing your future.</p>

      <div class="example-box">
        <div class="example-title">💰 Pension Tax Savings Example</div>
        <p><strong>Monthly Salary: KSh 100,000</strong></p>
        <p><strong>Without Pension Contribution:</strong></p>
        <ul>
          <li>Taxable Income: KSh 95,680 (after NSSF)</li>
          <li>PAYE Tax: KSh 19,454</li>
          <li>After Personal Relief: KSh 17,054</li>
        </ul>
        <p><strong>With KSh 20,000 Pension Contribution:</strong></p>
        <ul>
          <li>Taxable Income: KSh 75,680</li>
          <li>PAYE Tax: KSh 13,454</li>
          <li>After Personal Relief: KSh 11,054</li>
        </ul>
        <p><strong>Monthly Tax Savings: KSh 6,000!</strong></p>
      </div>

      <h2>Insurance Relief: Often Overlooked</h2>
      <p>You can claim 15% relief on premiums paid for:</p>
      <ul>
        <li>Life insurance policies</li>
        <li>Education insurance for children</li>
        <li>Health insurance (personal or family)</li>
        <li>Professional indemnity insurance</li>
      </ul>

      <h2>Mortgage Interest Deduction</h2>
      <p>If you have a home loan, the interest portion of your monthly payments is tax-deductible up to KSh 30,000 per month.</p>

      <div class="highlight-box">
        <h3>Documentation Required</h3>
        <ul>
          <li>Loan agreement with the bank</li>
          <li>Monthly loan statements</li>
          <li>Interest certificate from lender</li>
          <li>Property ownership documents</li>
        </ul>
      </div>

      <h2>Post-Retirement Medical Fund</h2>
      <p>Contributions to registered post-retirement medical funds are deductible up to KSh 15,000 monthly, helping you plan for healthcare costs in retirement.</p>

      <h2>How to Claim Your Deductions</h2>
      <ol>
        <li><strong>Keep Proper Records:</strong> Maintain all receipts and certificates</li>
        <li><strong>Inform Your Employer:</strong> Provide documentation for payroll deductions</li>
        <li><strong>File Annual Returns:</strong> Claim additional reliefs during tax filing</li>
        <li><strong>Use iTax Platform:</strong> Upload supporting documents online</li>
      </ol>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Not keeping proper documentation</li>
        <li>Exceeding deduction limits</li>
        <li>Contributing to unregistered schemes</li>
        <li>Forgetting to update employer payroll</li>
        <li>Not filing annual returns to claim unused reliefs</li>
      </ul>

      <div class="example-box">
        <div class="example-title">🎯 Optimization Tip</div>
        <p>Use our tax optimization tool to see exactly how much you can save by maximizing all available deductions for your income level!</p>
      </div>
    `,
    category: "tax-tips",
    
    images: {
      featured: "assets/images/featured/tax-deductions-guide.webp",
      icon: "assets/images/icons/deductions-icon.svg",
      alt: "Guide to tax deductions and reliefs in Kenya"
    },
    
    fallback: {
      icon: "🎯",
      backgroundColor: "#ed8936"
    },
    
    date: "2025-01-05",
    readTime: "10 min read",
    featured: false,
    author: {
      name: "Financial Tax Advisor",
      bio: "Expert in tax optimization and financial planning for Kenyan professionals"
    },
    slug: "maximizing-tax-deductions-kenya-guide",
    
    seo: {
      keywords: ["tax deductions Kenya", "tax relief Kenya", "pension contributions", "mortgage interest deduction"],
      metaDescription: "Complete guide to maximizing tax deductions in Kenya. Learn about pension contributions, insurance relief, and mortgage interest deductions."
    }
  }
];

// Helper functions
function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

function getPostsByCategory(category) {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured);
}

function getRecentPosts(limit = 5) {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    blogPosts, 
    getPostBySlug, 
    getPostsByCategory, 
    getFeaturedPosts, 
    getRecentPosts 
  };
} else {
  window.blogPosts = blogPosts;
  window.getPostBySlug = getPostBySlug;
  window.getPostsByCategory = getPostsByCategory;
  window.getFeaturedPosts = getFeaturedPosts;
  window.getRecentPosts = getRecentPosts;
}