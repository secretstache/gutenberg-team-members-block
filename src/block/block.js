/**
 * BLOCK: Team Member
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import classnames from 'classnames';
import icons from './icons.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, PlainText, BlockControls, InspectorControls, MediaUpload } = wp.editor; // Import components from wp.editor
const { Toolbar, Button, IconButton, Tooltip, PanelBody, PanelRow, FormToggle } = wp.components; // Import components from wp.components


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-team-members', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Team Members' ), // Block title.
	icon: 'groups', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Team Members' ),
		__( 'Gutenberg Block' ),
		__( 'Secret Stache Media' ),
	],

	attributes: {
		sliderMode: {
			type: 'boolean',
			default: true
		},
		gridMode: {
			type: 'boolean',
			default: false
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {

		var sliderMode = props.attributes.sliderMode;
		var gridMode = props.attributes.gridMode;

		function toggleMode() {
			if (sliderMode) {
				props.setAttributes( { sliderMode: false } )
				props.setAttributes( { gridMode: true } )
			} else {
				props.setAttributes( { sliderMode: true } )
				props.setAttributes( { gridMode: false } )
			}
		}

		return (
			<div className="main">
				<BlockControls key="controls">
					<Toolbar>
						<Tooltip text={ __( 'Enable Slider Mode' )  }>
							<Button className={ classnames(
								'components-icon-button',
								'components-toolbar-control',
								{ 'active': sliderMode },
							) }
							onClick={ toggleMode }
							>
							{icons.sliderMode}
							</Button>
						</Tooltip>
						<Tooltip text={ __( 'Enable Grid Mode' )  }>
							<Button className={ classnames(
								'components-icon-button',
								'components-toolbar-control',
								{ 'active': gridMode },
							) }
							onClick={ toggleMode }
							>
							{icons.gridMode}
							</Button>
						</Tooltip>
					</Toolbar>
				</BlockControls>

				<InspectorControls>
					<PanelBody
						title={ __( 'Basic' ) }
					>

						<PanelRow>
							<label
								htmlFor="mode-form-toggle"
							>
								{ __( 'Slider Mode' ) }
							</label>
							<FormToggle
								id="mode-form-toggle"
								label={ __( 'Mode') }
								checked={ gridMode }
								onChange={ toggleMode }
							/>
							<label
								htmlFor="mode-form-toggle"
							>
								{ __( '  Grid Mode' ) }
							</label>
						</PanelRow>
						
					</PanelBody>
				</InspectorControls>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>team-members</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );
