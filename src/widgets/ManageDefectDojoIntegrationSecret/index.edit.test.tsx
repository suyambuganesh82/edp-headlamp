/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestWrapper } from '../../../mocks/wrappers/default';
import { INTEGRATION_SECRET_NAMES } from '../../k8s/Secret/constants';
import { ManageDefectDojoIntegrationSecret } from './index';

test('renders ManageDefectDojoIntegrationSecret Edit component', () => {
    render(
        <TestWrapper>
            <ManageDefectDojoIntegrationSecret
                formData={{
                    currentElement: {
                        // @ts-ignore
                        metadata: {
                            name: INTEGRATION_SECRET_NAMES.DEFECT_DOJO,
                            uid: 'test-uid',
                            labels: {
                                'app.edp.epam.com/secret-type': 'defectdojo',
                            },
                            ownerReferences: [
                                {
                                    apiVersion: 'apiVersion',
                                    kind: 'ExternalSecret',
                                    name: INTEGRATION_SECRET_NAMES.DEFECT_DOJO,
                                    uid: 'test-uid',
                                    controller: true,
                                    blockOwnerDeletion: true,
                                },
                            ],
                        },
                        immutable: false,
                        data: { token: 'dGVzdC10b2tlbg==', url: 'dGVzdC11cmw=' },
                        type: 'Opaque',
                    },
                    handleDeleteRow: jest.fn(),
                }}
            />
        </TestWrapper>
    );

    const dialog = screen.getByTestId('form');
    expect(dialog).toMatchSnapshot();
});
