var fs = require( 'fs' );
var path = require( 'path' );

const __dirPathTokens = __dirname.split( path.sep );
const __dirFolderName = __dirPathTokens.pop();

try {
    process.chdir( '..' );
    fs.mkdirSync( 'docs' );
    process.chdir( __dirFolderName );
} catch( e ) {
    if( e.code !== 'EEXIST' ) {
        console.error( e );
        process.exit( 1 );
    }
}

fs.cp(
    path.join( __dirname, 'public' ),
    path.sep + path.join( ...__dirPathTokens, 'docs' ),
    {
        preserveTimestamps: true,
        recursive: true
    },
    function( err ) {
        if( err ) {
            console.error( err );
            process.exit( 1 );
        }
        console.log( 'Site deployment complete.' );
        process.exit( 0 );
    }
);
