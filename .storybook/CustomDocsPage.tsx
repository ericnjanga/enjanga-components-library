// .storybook/CustomDocsPage.tsx
import { 
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
  Heading
} from '@storybook/blocks';

export const CustomDocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    
    <hr style={{ margin: '2rem 0', border: '1px solid #e0e0e0' }} />
    
    <Heading>Table of Contents</Heading>
    <ul style={{ 
      listStyleType: 'none', 
      padding: 0,
      marginBottom: '2rem'
    }}>
      <li><a href="#default-variant" className="docs-toc-link">- Default</a></li>
      <li><a href="#horizontal-variant" className="docs-toc-link">- Horizontal Layout</a></li>
      <li><a href="#icon-variant" className="docs-toc-link">- With Icon</a></li>
    </ul>
    
    <hr style={{ margin: '2rem 0', border: '1px solid #e0e0e0' }} />
    
    {/* Wrap Heading in a div with id */}
    <div id="default-variant">
      <Heading>Default</Heading>
      <Primary />
      <Controls />
    </div>
    
    <div id="horizontal-variant">
      <Heading>Horizontal Layout</Heading>
      <Stories includePrimary={false} />
    </div>
  </>
);