// how to install?
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const FAQ = ({ faqData, faqTitle }: {
    faqData: {
        question: string;
        answer: string;
    }[];
    faqTitle: string
}) => {


    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{faqTitle}</h1>

            {/* Schema.org FAQ structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })
                }}
            />

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <div className="bg-white rounded-lg border p-4">
                                <DisclosureButton className="flex w-full justify-between items-center text-left">
                                    <span className="text-lg font-semibold">{item.question}</span>
                                    <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`} />
                                </DisclosureButton>
                                <DisclosurePanel className="text-gray-600 pt-4">
                                    {item.answer}
                                </DisclosurePanel>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};

export default FAQ;