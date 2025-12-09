"use client";
import React from 'react';
import { config } from '@/config';
import { HiBadgeCheck } from 'react-icons/hi'; // Icon for Certs
import SlitGallery from '@/components/SlitGallery';

const CertificationsGallery = () => {
    const { certifications } = config;

    const renderCertContent = (cert) => (
        <div className="flex flex-col justify-center h-full gap-4 text-left">
            <div className="mb-2 p-3 bg-[#00C2FF]/10 rounded-full w-fit">
                <HiBadgeCheck className="w-8 h-8 text-[#00C2FF]" />
            </div>

            <h3 className="text-2xl font-bold text-white leading-tight">{cert.title}</h3>
            <p className="text-[#00FF9D] font-medium text-lg flex items-center gap-2">
                {cert.issuer}
            </p>

            <div className="flex flex-col gap-1 text-sm text-gray-400 font-mono mt-1">
                <span>Issued: {cert.issuedDate}</span>
                {cert.credentialId && <span>ID: {cert.credentialId}</span>}
            </div>

            {cert.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.slice(0, 4).map((skill, i) => (
                        <span key={i} className="text-xs border border-[#00C2FF]/30 px-2 py-1 rounded text-[#00C2FF] bg-[#00C2FF]/5">
                            {skill}
                        </span>
                    ))}
                    {cert.skills.length > 4 && (
                        <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">
                            +{cert.skills.length - 4} more
                        </span>
                    )}
                </div>
            )}
        </div>
    );

    const renderCollapsed = (cert) => (
        <div className="flex items-center gap-2">
            <span className="text-[#00C2FF]"><HiBadgeCheck /></span>
            <span>{cert.issuer}</span>
        </div>
    );

    return (
        <div className="w-full max-w-4xl mx-auto h-[400px]">
            <SlitGallery
                items={certifications}
                renderItem={renderCertContent}
                renderCollapsed={renderCollapsed}
            />
        </div>
    );
};

export default CertificationsGallery;
